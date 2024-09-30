/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https', 
                hostname:'**' //add host name
            }
        ]
    }
};

export default nextConfig;
