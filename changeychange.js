const textContainer = document.getElementById("text-container");
const paragraphs = textContainer.getElementsByTagName("p");
const lastParagraph = paragraphs[paragraphs.length - 1];

lastParagraph.addEventListener("scroll", () => {
  const rect = lastParagraph.getBoundingClientRect();
  const paragraphHeight = lastParagraph.offsetHeight;
  const scrolledDistance = lastParagraph.scrollTop;

  if (scrolledDistance + rect.height >= paragraphHeight) {
    const fullText = textContainer.innerText;
    const newHeText = fullText.replaceAll("she", "he").replaceAll("her", "his");
    textContainer.innerHTML = "<p>" + newHeText + "</p>";
  }
});
