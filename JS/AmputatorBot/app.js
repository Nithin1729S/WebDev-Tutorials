const removeAmpFromUrl = async (url) => {
    const apiUrl = 'https://www.amputatorbot.com/api/v1/convert';
    const params = {
        gac: true,  // Whether to use the canonical-finding method guess-and-check
        md: 3,      // The maximum number of referrals to canonicals to follow
        q: url      // The query; one or more AMP URLs (preferably separated by ";")
    };
    
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.get(apiUrl, { params, headers });
        const data = response.data;
        console.log(data);
        // Process the data as needed
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Example usage
const url = 'https://www.google.com/amp/s/electrek.co/2018/06/19/tesla-model-3-assembly-line-inside-tent-elon-musk/amp/';
removeAmpFromUrl(url);
