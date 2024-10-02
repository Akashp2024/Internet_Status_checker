window.addEventListener('load',checkInternetConnnection);
function checkInternetConnnection(){
    let connection_status = document.querySelector('#status_text');
    let ip_address = document.querySelector('#addr_text');
    let network_strength = document.querySelector('#network_text');

    connection_status.textContent = 'Checking...';

    if (navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            ip_address.textContent = data.ip;
            connection_status.textContent = 'Connected';
            const connection = navigator.connection;
            const Strength = connection ? connection.downlink + 'Mbps' : 'unknown';
            network_strength.textContent = Strength;
        })

    }
    else
    {
        connection_status.textContent = 'Disconnected.';
        ip_address.textContent = '----';
        network_strength.textContent = '----';
    }
    }