
interface AppConfig {
    apiUrl: string;
    environment: 'local' | 'test' | 'production';
    otherConfigValue?: string;
    hostUrl: string;
    ga_4: string
}

const config: AppConfig = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',  // Default fallback value
    environment: process.env.NEXT_PUBLIC_ENV as 'local' | 'test' | 'production' || 'local',
    hostUrl: process.env.NEXT_PUBLIC_HOST_URL as 'local' | 'test' | 'production' || 'local',
    ga_4: process.env.NEXT_PUBLIC_GA_4  as 'local' | 'test' | 'production' || 'local'
    // Add any other config values you might have
};

export default config;
