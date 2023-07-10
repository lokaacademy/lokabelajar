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
    console.log('students ', students_object);
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