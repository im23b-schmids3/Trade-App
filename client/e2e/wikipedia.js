import { Selector } from 'testcafe';
 
fixture('Wikipedia Random Page Test').page('https://en.wikipedia.org/wiki/Special:Random');
 
test('Follow first Wikipedia links until Philosophy or loop', async (t) => {
    const visitedPages = new Set();
    let currentTitle = await getTitleText(t);
    while (currentTitle !== 'Philosophy') {
        if (visitedPages.has(currentTitle)) {
            await t.expect(false).ok('Loop detected, test failed');
            return;
        }
        visitedPages.add(currentTitle);
        const firstLink = await getFirstValidLink(t);
        await t.click(firstLink);
        currentTitle = await getTitleText(t);
    }
    console.log(visitedPages.size);
});
 
const getTitleText = async (t) => {
  const title = Selector('#firstHeading');
  await t.expect(title.exists).ok({ timeout: 10000 });
  return await title.innerText;
};
 
const getFirstValidLink = async (t) => {
  const content = Selector('#mw-content-text');
  await t.expect(content.exists).ok({ timeout: 10000 });
 
  const firstValidLink = await content
    .find('p a')
    .filter((node) => {
      return (
        !node.closest('i') &&
        !node.closest('sup') &&
        !node.closest('.infobox') &&
        node.getAttribute('href')?.startsWith('/wiki/')
      );
    })
    .nth(0);
  await t.expect(firstValidLink.exists).ok({ timeout: 10000 });
  return firstValidLink;
};