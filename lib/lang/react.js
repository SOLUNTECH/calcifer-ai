const react = [
  {"role": "system", "content": "You are a helpful assistance that convert instructions in javascript code compiled with node js, using the framework react.js to build the frontend for a email and mail campaign generation platform applying the javascript airbnb style guide."},
  {"role": "user", "content": "create a new component called attempt-list for the knack view_535. It is part of the [attempts] domain. it render the [attemptList] component"},
  {"role": "assistant", "content": `  filename: attempt-list.view_535.js
  code:
  ---
  import React, { useState, useEffect } from 'react';
  import {Table} from '../table';
  import { getAttemptListByStepId} from  '../../services/attempts/index'

  export function AttemptList() {

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [attempts, setAttempts] = useState({});
    const [searching, setSearching] = useState(false);
    const [loading, setLoading] = useState(false);
    const title = 'Participants';
    const stepIdc = Knack.models.view_259.attributes.id;

    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        const res = await getAttemptListByStepId({
          stepIdc,
          search,
          page,
          limit
        });
        setAttempts(res);
        setLoading(false);
      }
      fetchData();
    }, [page]);

    useEffect(() => {
      async function fetchData() {
        if (searching && search != '') {
          setLoading(true);
          const res = await getAttemptListByStepId({
            stepIdc,
            search,
            page: 1,
            limit
          });
          setAttempts(res);
        }
        if (searching && search === '') {
          const res = await getAttemptListByStepId({
            stepIdc,
            search,
            page,
            limit
          });
          setAttempts(res);
        }
        setSearching(false);
        setLoading(false);
      }
      fetchData();
    }, [searching]);

    const handleSearch = () => {
      setSearching(true);
    };

    return (
      <Table
      {...{
        ...attempts,
        title,
        loading,
        search,
        setPage,
        setSearch,
        handleSearch,
      }}
    />
    );
  }
  ---`},
  {"role": "user", "content": "Create a new service. This React service file is a set of async functions that communicate with the backend to retrieve data from the server. The file includes five functions, which are named getAttemptListByCampaignId, exportAttemptListByCampaignId, createNewParticipantList, getAttemptListForEncoding, getAttemptListByStepId, and getAttemptListByParticipantId."},
  {"role": "assistant", "content": `filename: attempts.services.js
  code:
  ---
  import {
    requestHandler,
    mapAttemptsToParticipants,
    mapAttemptsToEncoding,
    mapAttemptsToEmailStep,
    mapAttemptsToParticipantHistory,
    mapAttemptsForAgents,
    mapAttemptsForAgentsSkip
  } from "../../common/index.js";
  
  export async function getAttemptListByCampaignId({
    campaignIdc,
    search,
    page,
    limit,
    match,
    rules,
  }) {
    const headers = [
      "Participant Name",
      "Confirmed?",
      "Participant Type",
      "Address",
      "Email",
      "Phone",
    ];
  
    const filters = {
      page,
      limit,
      search,
    };
  
    if (rules && rules !== "") {
      console.log("old rules: ", { rules });
      filters.match = match;
      const jsonRules = JSON.parse(rules);
      const newRulesArr = jsonRules.map((i) => {
        i.value = i.value.replaceAll("+", "%2B");
        return i;
      });
      filters.rules = JSON.stringify(newRulesArr);
      console.log("new rules: ", filters.rules);
    }
  
    const settings = {
      method: "GET",
      route: "/attempts/knack/campaigns/" + campaignIdc,
      filters,
      data: {},
    };
  
    const [err, req] = await requestHandler(settings);
  
    if (err || !req?.results?.length) {
      return { headers };
    }
    const attempts = mapAttemptsToParticipants(req.results);
    return {
      headers,
      items: attempts,
      page: req.page,
      limit: req.limit,
      totalResults: req.totalResults,
      totalPages: req.totalPages,
    };
  }
  export async function createNewParticipantList({
    campaignIdc,
    search,
    page,
    limit,
    match,
    rules,
    listName,
  }) {
    const filters = {
      page,
      limit,
      search,
    };
  
    if (rules && rules !== "") {
      filters.match = match;
      const jsonRules = JSON.parse(rules);
      const newRulesArr = jsonRules.map((i) => {
        i.value = i.value.replaceAll("+", "%2B");
        return i;
      });
      filters.rules = JSON.stringify(newRulesArr);
    }
  
    const settings = {
      method: "POST",
      route: "/attempts/list/campaign/" + campaignIdc,
      filters,
      data: {
        campaignId: campaignIdc,
        name: listName,
      },
    };
  
    const [err, req] = await requestHandler(settings);
  
    if (err) {
      return {};
    }
    return req;
  }
   
  ---`},
  {"role": "user", "content": "Create a new component. This React component file is a modal that import useModal hook to implement the open/close logic"},
  {"role": "assistant", "content": `filename: modal.js
  code:
  ---
  import React from 'react';
  import useModal from '../hooks/useModal';

  export default function ModalComponent() {
    const [isOpen, openModal, closeModal] = useModal();

    return (
      <>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={closeModal}>Close Modal</button>
              <p>Modal Content Goes Here</p>
            </div>
          </div>
        )}
      </>
    );
  }   
  ---`},
]

module.exports = {
  react
}