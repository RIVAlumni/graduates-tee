const form = FormApp.getActiveForm();

function onSubmit() {
  const response = {};
  const formResponse = form.getResponses().slice(-1).pop();
  const itemResponses = formResponse.getItemResponses();

  for (let i = 0; i < itemResponses.length; i++) {
    const itemResponse = itemResponses[i];
    const titleResponse = itemResponse.getItem().getTitle();
    const answerResponse = itemResponse.getResponse();

    if (!titleResponse.includes("PDPA"))
      response[titleResponse] = answerResponse;
  }

  Logger.log(response);
}

function normalize(data: Record<string, string>) {}
