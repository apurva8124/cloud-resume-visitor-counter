const apiURL = 'https://53nhr8z039.execute-api.ap-south-1.amazonaws.com/test/visit';

async function getVisitorCount() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        document.getElementById('counter').innerText = data.count;
    } catch (error) {
        console.log('Error:', error);
        document.getElementById('counter').innerText = '1';
    }
}

getVisitorCount();
