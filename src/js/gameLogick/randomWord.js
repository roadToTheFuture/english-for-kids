export function generateArrWithAudio() {
  const audiosInThePage = [...document.querySelectorAll('audio')];
  const filterAudio = audiosInThePage.filter((element) => element.classList.contains('play'));
  return filterAudio;
}
