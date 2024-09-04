// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.
{
    function fetchData1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data fetched 1')
            }, 1000);
        })
    }
    fetchData1().then((resolve) => {
        console.log(resolve)
    })
}

// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". Modify your test to handle this rejection using .catch().
{
    function fetchData2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Fail to fetch data 2')
            }, 2000);
        })
    }
    fetchData2()
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) => {
        console.error(reject)
    })
}

// 3. Convert the fetchData function from Question 1 to use async and await instead of .then(). Ensure to handle errors using try and catch
{
    function fetchData3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data fetched 3')
            }, 3000);
        })
    }
    async function handler() {
       try {
        let res = await fetchData3()
        console.log(res)
       } catch (error) {
            console.log(error)
       }
    }    
    handler()
}
// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)
{
    function getCountryData() {
        setTimeout(() => {
            fetch('https://restcountries.com/v3.1/all')
            .then((resolve) => {
                return resolve.json()
            })
            .then((result) => {      
                document.querySelector('.container').innerHTML = ''
                result.forEach(country => {

                    const countrybox = document.createElement('div')
                    const countryname = document.createElement('h2')
                    const imagebox = document.createElement('img')

                    countrybox.className = 'box'
                    countryname.className = 'heading'
                    imagebox.className = 'image'

                    imagebox.src = country.flags.png
                    countryname.innerHTML = country.name.common

                    countrybox.appendChild(countryname)
                    countrybox.appendChild(imagebox)
                    document.querySelector('.container').appendChild(countrybox)
                });
            })
            .catch((error) => {
                console.log(error)
                document.querySelector('.container').innerHTML = ''
                const err = document.createElement('h2')
                err.innerText = error
                err.style.fontSize = 'x-large'
                err.style.color = 'red'
                document.querySelector('.container').appendChild(err)
            })
        }, 500);
    }
}