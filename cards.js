fetch('https://randomuser.me/api/?results=9')
        .then(res => res.json())
        .then(data => {
            let users = data.results, output = '', userNum = 0;
            //console.log(users);

            users.forEach(function (lists) {
                userNum++;
                output += `
                <div class="wrapper" data-aos="fade-in" data-aos-delay="${userNum*150}" data-aos-duration="400" data-aos-once: true>
                    <h3>User Nr. ${userNum}</h3>
                    <div class="card-body">
                        <ul class="list">
                            <li class="list-item"><u>Name:</u> ${lists.name.first} ${lists.name.last}</li>
                            <li class="list-item"><u>Email:</u> ${lists.email}</li>
                            <li class="list-item"><u>Phone:</u> ${lists.cell}</li>
                            <li class="list-item"><u>Street:</u> ${lists.location.street.name} ${lists.location.street.number}</li>
                            <li class="list-item"><u>City:</u> ${lists.location.city}, ${lists.location.country}</li>
                            <li class="list-item"><u>ZIP:</u> ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });
document.getElementById('output').innerHTML = output;
});