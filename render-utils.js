export function renderAstrosignOption(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}

export function renderBeanieBaby(beanieBaby) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanieBaby.png;
    img.alt = beanieBaby.title;

    const h2 = document.createElement('h2');
    h2.textContent = beanieBaby.title;

    const p = document.createElement('p');
    p.textContent = beanieBaby.astroSign;

    li.append(h2, img, p);

    return li;
}
