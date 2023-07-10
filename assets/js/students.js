function loadStudentsObject() {
    const students_object = {
        1 : {
            "name": "Nurman",
            "role": "Backend",
            "nilai": 80
        },
        2: {
            "name": "Sartika Dewi",
            "role": "PM",
            "nilai": 90
        },
        3: {
            "name": "Abu Sofyan",
            "role": "PM",
            "nilai": 90
        }
    }

    // create DOM to show object
    
    const studentsSection = document.getElementById("students");

    const studentTitle = document.createElement("h1");
    studentTitle.innerText = "List Students :"
    studentsSection.appendChild(studentTitle);

    /* loop object and write to DOM */
    for (const studentId in students_object) {
        const student = students_object[studentId];
        const studentDiv = document.createElement("div");
        studentDiv.innerHTML = `
            <h3>Name: ${student.name}</h3>
            <p>Role: ${student.role}</p>
            <p>Nilai: ${student.nilai}</p>
        `;
        studentsSection.appendChild(studentDiv);
    }
    
}

/* grouping / array object */

function loadStudents() {
    const students_group = {
        "Backend" : {
            "name": "Nurman",
            "role": "Backend",
            "nilai": 80
        },
        "PM" : [{
            "name": "Sartika Dewi",
            "role": "PM",
            "nilai": 90
        },
        {
            "name": "Abu Sofyan",
            "role": "PM",
            "nilai": 90
        }]
    }
    console.log('students group by', students_group);
}