let name = 'bob';
console.log(`hi ${name}`);

let sentence = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur tristique, lectus quis aliquam tristique, 
    nisl sem tincidunt turpis, sit amet volutpat urna nulla eget dui. 
    Pellentesque consectetur maximus fermentum. Praesent mollis, 
    enim interdum eleifend finibus, est lacus dignissim libero, 
    quis auctor magna sapien et turpis.
`;
console.log(sentence);

function getRecentCount() { return 1 }

let interpolation = `Give me ${getRecentCount() ==1 ? 'one good reason' : ' a few reasons'} to try this.`;
console.log(interpolation);