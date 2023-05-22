// import '@testing-library/jest-dom'
// import { render } from '@testing-library/svelte'
import Home from '../src/ui/home/Home.svelte';

describe ('Página inicial', () => {
  it('Tiene un titulo', () => {
    // render(page)
    // const screen = render(Home);
    // console.log(title)
    const host = document.createElement('div');
    document.body.appendChild(host);
    const domtree = new Home();
    domtree.
    expect(host.getBy.getByRole('heading',{ name: 'Henry OMDB App', level: 1})).toBeTruthy();
  })
})
