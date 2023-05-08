const reactKnack = [
  {"role": "system", "content": "You are a helpful assistance that convert instructions in javascript code compiled with node js, using the framework react.js to build the frontend for a email and mail campaign generation platform applying the javascript airbnb style guide."},
  {"role": "user", "content": "create a new page called [attempt-list] for the knack [view_535]. It is part of the [attempt] domain. it render the [AttemptList] component"},
  {"role": "assistant", "content": `  filename: attempt-list.view_535.js
  code:
  ---
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { lib } from '../../lib'
  
  import  AttemptList  from '../../components/attempt-list';
  
  export function AttemptsByStepPage() {
    // Render Attempt Table in Campaign -> StepDetails -> ParticipanSteps
    lib.addTask(
      "renderView",
      "knack-view-render.view_535",
      async function (e, v) {
  
        $("#view_535").append('<div id="AttemptListWrapper"></di');
        const root = createRoot(document.querySelector("#AttemptListWrapper"));
        root.render(<AttemptList />)
      }
    );
  }
  
  ---`},
  {"role": "user", "content": "create a new page called [participant-history] for the knack [view_537]. It is append to [AttemptListWrapper] div. it render the [AttemptList] component"},
  {"role": "assistant", "content": `filename: participant-history.view_537.js
  code:
  ---
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { lib } from '../../lib'
  import ParticipantHistory from '../../components/participant-list';
  
  
  export function ParticipantHistoryPage() {
  lib.addTask(
    'renderView',
    'knack-view-render.view_537',
    async function(e, v) {
      $('#view_537').append('<div id="ParticipantHistoryWrapper"></div>');
      const root = createRoot(document.querySelector('#ParticipantHistoryWrapper'));
      root.render(<ParticipantHistory/>)
    }
  )}
  
  ---`}
]

module.exports = {
  reactKnack
}