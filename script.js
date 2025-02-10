// ------------- PÅSKÄGG 1 ------------- //
// Byter bakgrundsfärg när man klickar på #secret-trigger
const secretTrigger = document.querySelectorAll('#secret-trigger');

secretTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    console.log("You clicked the secret-trigger!");
    document.body.classList.toggle('easter-egg-bg');
  });
});

// ------------- PÅSKÄGG 2 ------------- //
// Lyssna efter tangentbordshändelser för en kodsekvens.
let inputSequence = '';
document.addEventListener('keydown', (e) => {
  inputSequence += e.key;  // Lägg till nedtryckt tangent
  console.log("Current inputSequence:", inputSequence);

  if (inputSequence.includes("1337")) {
    showSecretModal();
    inputSequence = '';
  }
});

function showSecretModal() {
  let modal = document.createElement('div');
  modal.id = 'code-modal';
  modal.innerHTML = `
    <div id="code-modal-content">
      <h2>BOOM!</h2>
      <p>Aj aj aj vilken eliiiite!</p>
      <button id="close-modal-btn">Sluta vara elite</button>
    </div>
  `;
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';

  document.body.appendChild(modal);

  // Styla innehållet
  const content = document.getElementById('code-modal-content');
  content.style.background = '#fff';
  content.style.padding = '2rem';
  content.style.borderRadius = '8px';
  content.style.textAlign = 'center';

  // Stängknapp
  const closeBtn = document.getElementById('close-modal-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}
