const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data

export async function getBeanieBabies(name, astroSign) {
    // > Part D: Add a second argument to `select(` to
    // return an exact db count of matching records

    // > Part A: Implement the client query from countries:
    //   1. select all columns
    //   2. order by country name
    //   3. limit to 100 countries
    let query = client
        .from('beanie_babies')
        .select('*', { count: 'exact' })
        .order('releaseYear')
        .limit(100);

    if (name) {
        query = query.ilike('title', `%${name}%`);
        // > Part C: add query for name
    }

    if (astroSign) {
        query = query.eq('astroSign', astroSign);
        // > Part C: add query for continent
    }
    const response = await query;
    return response;
    // > Part A: `await` the query and return the response
}

export async function getAstrosigns() {
    let query = client.from('beanie_baby_astroSigns').select('*');
    const response = await query;

    return response;
    // > Part B: await client query from country_continents
    // (select all columns) and return response
}
