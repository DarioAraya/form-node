export const calculator = (divFather) => {
  let dataCompany = document.querySelector("#dataCompany");
  let dataCompany_top_offset = dataCompany.offsetTop;
  let dataCompany_bottom_offset =
    dataCompany.offsetHeight + dataCompany_top_offset;

  let dataAgent = document.querySelector("#dataAgent");
  let dataAgent_top_offset = dataAgent.offsetTop;
  let dataAgent_bottom_offset = dataAgent.offsetHeight + dataAgent_top_offset;

  let screen_top_offset = divFather.scrollTop;
  let screen_bottom_offset = screen_top_offset + window.innerHeight;

  const company = document.getElementById("company");
  const agent = document.getElementById("agent");

  if (
    dataCompany_top_offset > screen_top_offset &&
    screen_bottom_offset > dataCompany_bottom_offset
  ) {
    company.setAttribute("class", "mdc-deprecated-list-item__text selected");
    company.parentNode.style.background = "rgba(0, 153, 204, 0.1)";
  } else {
    company.setAttribute("class", "mdc-deprecated-list-item__text");
    company.parentNode.style.background = "";
    company.parentNode.style.transition = "0.5s";
  }
  if (
    dataAgent_top_offset > screen_top_offset &&
    screen_bottom_offset > dataAgent_bottom_offset
  ) {
    agent.setAttribute("class", "mdc-deprecated-list-item__text selected");
    agent.parentNode.style.background = "rgba(0, 153, 204, 0.1)";
  } else {
    agent.setAttribute("class", "mdc-deprecated-list-item__text");
    agent.parentNode.style.background = "";
    agent.parentNode.style.transition = "0.5s";
  }
};
