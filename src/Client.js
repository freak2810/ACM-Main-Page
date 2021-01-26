import SanityClient from '@sanity/client';

export default SanityClient({
    projectId: '5q3312ct',
    dataset: 'production',
    useCdn: true
});