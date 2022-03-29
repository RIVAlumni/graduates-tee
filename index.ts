const form = FormApp.getActiveForm();

const mappings = {};

function onSubmit() {
  const response = {};
  const formResponse = form.getResponses().slice(-1).pop();
  const itemResponses = formResponse.getItemResponses();

  for (let i = 0; i < itemResponses.length; i++) {
    const itemResponse = itemResponses[i];
    const titleResponse = itemResponse.getItem().getTitle();
    const answerResponse = itemResponse.getResponse();

    if (!titleResponse.includes('PDPA'))
      response[titleResponse] = answerResponse;
  }

  return normalize(response);
}

function normalize(response: Record<string, string>) {
  const data = Object.keys(response);
  Logger.log(data);
}
