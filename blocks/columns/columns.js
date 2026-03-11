export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  // [...block.children].forEach((row) => {
  //   [...row.children].forEach((col) => {
  //     const h2Title = col.querySelector('h2');
  //     if (h2Title) {
  //       const titleWrapper = h2Title.closest('div');
  //       if (titleWrapper && titleWrapper.children.length === 1) {
  //         // picture is only content in column
  //         titleWrapper.classList.add('text-group');
  //       }
  //     }
  //   });
  // });

  // const author = block.querySelector('p, img');
  //   if(author) {
  //     author.parentElement.classList.add('author');
  //   }
}
