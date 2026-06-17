const apiURL = 'https://53nhr8z039.execute-api.ap-south-1.amazonaws.com/test/visit';

async function getVisitorCount() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data && data.count !== undefined) {
            document.getElementById('counter').innerText = data.count;
        } else {
            document.getElementById('counter').innerText = '0';
        }

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('counter').innerText = 'Error';
    }
}

// ✅ ADD THIS PART (VERY IMPORTANT)
document.addEventListener("DOMContentLoaded", function () {
    getVisitorCount();
});
