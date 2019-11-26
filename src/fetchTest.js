/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 * @return {Element} arg A number to do something to.
 */
export async function fetchTest() {
  try {
    const response = await fetch("http://jackhkmatthewfdasfdass.com", {
      mode: "no-cors"
    });
    const status = await response.status;
    console.log(status);
  } catch (err) {
    console.log(err);
  }
}
