# Bug Report Button

This is a Web components custom element. See demo and documentation on:

https://grispiapp.github.io/bug-report-button-web-component/

```html
<!--Add to your page-->

<script type="module" src="https://grispiapp.github.io/bug-report-button-web-component/screenshot-button.js"></script>

<!--Usage-->

<bug-report-button></bug-report-button>

```

Then you should listen for `BugReportButton.SENDING_EVENT_NAME` event on the `document` object. It will have the screenshot as blob and the message as text.

Then the UI will enter a loading state. You need to send `BugReportButton.SENDING_DONE_EVENT_NAME` to the `document` object in order to finish loading state.

Loading state will end automatically (timeout) after 10s if no `BugReportButton.SENDING_DONE_EVENT_NAME` event is sent.
