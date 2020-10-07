// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

exports.handler = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.THEMOVIEDB_API_KEY}&page=1`,
    )
        .then((results) => results.json())
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
    };
};
