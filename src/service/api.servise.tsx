// Define an interface for the error object
interface ErrorObject {
  index: number;
}

// api.service.tsx
import axios from "axios";

const Api = 'https://youtube-v31.p.rapidapi.com';

// Initialize error with a possible null value, indicating it may be null initially
let error: ErrorObject | null = { index: 0 };

function getCorrectToken(TokenIndex: number) {
  if (TokenIndex === 0) {
    return "579de46de1msh0a167fffbb4bd68p1a21aejsn24084b936f1c";
  } else if (TokenIndex === 1) {
    return "f5ebe04355mshc9d180d75ae0332p1481bejsn6653f17965aa";
  }
}

const ApiService = {
  async Feching(url: string): Promise<any> { // Specify return type as Promise<any>
    const options = {
      url: `${Api}/${url}`,
      params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': getCorrectToken(error!.index), // Non-null assertion operator (!) used here
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    } as const; // Type assertion used here to specify the type of options
    
    try {
      const res = await axios.get(options.url, options);
      console.log(res);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error("Error occurred:", error);
      if (error !== null && typeof error === 'object' && 'index' in error) {
        // Type assertion used here to inform TypeScript about the type of error
        (error as ErrorObject).index = ((error as ErrorObject).index + 1) % 2;
        return this.Feching(url);
      }
    }
    // If none of the conditions are met, you should explicitly return something
    return null; // You can change this to whatever makes sense for your application
  }
};

export default ApiService;
