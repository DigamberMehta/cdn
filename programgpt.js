async function copyTextToClipboard(text) {
    try {
      if (!text) {
        throw new Error("");
      }
      await navigator.clipboard.writeText(text);
    } catch (error) {
      throw error;
    }
  }
  
  async function sendToOpenAI(text) {
    const apiKey = "sk-proj-Z5fT2bUeN7JvlNrd8ohoT3BlbkFJMLrLZM2EpiuQ8OKdLW2G";
    const url = "https://api.openai.com/v1/chat/completions";
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are programmer in c."
        },
        {
          role: "user",
          content: text
        }
      ]
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody),
    };
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error("" + response.status);
      }
      const data = await response.json();
      const message = data.choices[0].message.content;
      await copyTextToClipboard(message);
      return message;
    } catch (error) {
      throw error;
    }
  }
  
  async function handleDoubleClick(event) {
    try {
      const questionElement = event.target.closest(
        'div[aria-labelledby="each-type-question"]'
      );
      if (!questionElement) {
        throw new Error("");
      }
      const questionText = questionElement.innerText
        .replace(/\n{3,}/g, "\n")
        .trim();
      const instructionElement = document.querySelector(
        '[aria-labelledby="instruction-card"]'
      );
      let formattedText = "";
      if (!instructionElement) {
        formattedText =
          questionText + "please Solve a question in simple way in c Language";
      } else {
        formattedText =
          questionText +
          " using " +
          instructionElement.innerText +
          "\nsteps remember while solving: \nstep 1: solve the question in c language in simpliest way \nstep2: must   Use only the whitelisted thing given in the question \nstep3 : if you are using any in-built function , mention its header section \n step 4: Ensure that the sample input and output format are matched precisely. \nall these step must be followed while solving the question in c language at any cost. \n";
      }
      await copyTextToClipboard(formattedText);
      const formattedTextFromClipboard = await navigator.clipboard.readText();
      await sendToOpenAI(formattedTextFromClipboard);
      const successMessageElement = document.querySelector(
        ".lg\\:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\\:t-text-xl.t-font-bold"
      );
      if (successMessageElement) {
        successMessageElement.style.color = "grey";
        setTimeout(() => {
          successMessageElement.style.color = "black";
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  function Hack() {
    const mutationObserver = new MutationObserver((mutations, observer) => {
      if (document.querySelector('div[aria-labelledby="each-type-question"]')) {
        observer.disconnect();
      }
    });
    mutationObserver.observe(document, {
      childList: true,
      subtree: true,
    });
  
    document.addEventListener("dblclick", handleDoubleClick);
  }
  
  document.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey && event.key === "y") ||
      (event.altKey && event.key === "y")
    ) {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (
            document.activeElement instanceof HTMLInputElement ||
            document.activeElement instanceof HTMLTextAreaElement
          ) {
            document.activeElement.value = text;
            document.activeElement.dispatchEvent(
              new Event("input", { bubbles: true })
            );
          }
        })
        .catch((error) => {
          console.error("Failed to paste:", error);
        });
    }
  });
  
  setTimeout(() => {
    Hack();
  }, 5000);