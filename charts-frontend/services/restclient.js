import 'isomorphic-unfetch';

// "fetch" is now installed globally if it wasn't already available

fetch('../fixture.json')
    .then( r => r.json() )
    .then( data => {
        console.log(data);
    }
);