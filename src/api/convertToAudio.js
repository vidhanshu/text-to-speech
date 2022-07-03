
import axios from "axios"

export const convertTextToSpeech = async (text, setStatus) => {

    const encodedParams = new URLSearchParams();
    encodedParams.append("voice_code", "en-US-1");
    encodedParams.append("text", text);
    encodedParams.append("speed", "1.00");
    encodedParams.append("pitch", "1.00");
    encodedParams.append("output_type", "audio_url");

    const options = {
        method: 'POST',
        url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        },
        data: encodedParams
    };
    try {
        setStatus("Loading...");
        const res = await axios.request(options);
        console.log(res)
        setStatus("click to convert");
        return { data: res.data };
    } catch (err) {
        console.log(err);
        setStatus("click to convert");
        return { error: err.message };
    }
}