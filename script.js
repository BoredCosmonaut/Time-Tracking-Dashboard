const timeButtons = document.querySelectorAll(".time-button");
// var json = require("../Time Tracking Dashboard/data.json")
timeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log("hii")
        const time = e.target.id;
        console.log(time)
        changeTime(time)
    })
})

async function getData() {
    try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        return jsonData; // Assuming your JSON structure has a property named 'daily'
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Handle errors gracefully based on your application's logic
    }
}


async function changeTime(time) {
    const data = await getData();
    if(data) {
        changeSelfCare(data,time);
        changeWork(data,time);
        changePlay(data,time);
        changeStudy(data,time);
        changeExercise(data,time);
        changeSocial(data,time)
    } else {
        console.log("Failed to get data. Check console for errors.");
    }   
}

function changeSelfCare(data,time) {
        const selfCareData =  data.find(item => item.title === "Self Care");
        switch (time) {
            case "weekly":
                const weeklyTimeframes = selfCareData.timeframes.weekly;
                const currentWeek = weeklyTimeframes.current;
                const previousWeek = weeklyTimeframes.previous;

                document.getElementById("self-current-hour").innerText = `${currentWeek}hrs`;
                document.getElementById("self-last-hour").innerText = `Last week ${previousWeek}hrs`
                break;
            case "daily":
                const dailyTimeFrames = selfCareData.timeframes.daily;
                const currentDay = dailyTimeFrames.current;
                const previousDay = dailyTimeFrames.previous;

                document.getElementById("self-current-hour").innerText = `${currentDay}hrs`;
                document.getElementById("self-last-hour").innerText = `Last day ${previousDay}hrs`
                break;
            case "monthly":
                const monthlyTimeFrames = selfCareData.timeframes.monthly;
                const currentMonth = monthlyTimeFrames.current;
                const previousMonth = monthlyTimeFrames.previous;
                
                document.getElementById("self-current-hour").innerText = `${currentMonth}hrs`;
                document.getElementById("self-last-hour").innerText = `Last month ${previousMonth}hrs`
                break;
            default:
                document.getElementById("self-current-hour").innerText = `0hrs`;
                document.getElementById("self-last-hour").innerText = `Last month 0hrs`
        }
}

function changeWork(data,time) {
    const workData = data.find(item => item.title === "Work");
    switch (time) {
        case "weekly":
            const weeklyWorkTimeframes = workData.timeframes.weekly;
            const currentWeek = weeklyWorkTimeframes.current;
            const previousWeek = weeklyWorkTimeframes.previous;

            document.getElementById("work-current-hour").innerText = `${currentWeek}hrs`;
            document.getElementById("work-last-hour").innerText = `Last week ${previousWeek}hrs`
            break;
        case "daily":
            const dailyWorkTimeframes = workData.timeframes.daily;
            const currentDay = dailyWorkTimeframes.current;
            const previousDay = dailyWorkTimeframes.previous;

            document.getElementById("work-current-hour").innerText = `${currentDay}hrs`;
            document.getElementById("work-last-hour").innerText = `Last day ${previousDay}hrs`
            break;
        case "monthly":
            const monthlyTimeframes = workData.timeframes.monthly;
            const currentMonth = monthlyTimeframes.current;
            const previousMonth = monthlyTimeframes.previous;

            document.getElementById("work-current-hour").innerText = `${currentMonth}hrs`;
            document.getElementById("work-last-hour").innerText = `Last month ${previousMonth}hrs`
            break;
    }
}

function changePlay(data,time) {
    const playData = data.find(item => item.title === "Play");
    switch (time) {
        case "weekly":
            const weeklyTimeframes = playData.timeframes.weekly;
            const currentWeek = weeklyTimeframes.current;
            const previousWeek = weeklyTimeframes.previous;

            document.getElementById("play-hours").innerText = `${currentWeek}hrs`;
            document.getElementById("play-last-hour").innerText = `Last week ${previousWeek}hrs`
            break;
        case "daily":
            const dailyTimeframes = playData.timeframes.daily;
            const currentDay = dailyTimeframes.current;
            const previousDay = dailyTimeframes.previous;

            document.getElementById("play-hours").innerText = `${currentDay}hrs`;
            document.getElementById("play-last-hour").innerText = `Last day ${previousDay}hrs`
            break;
        case "monthly":
            const monthlyTimeframes = playData.timeframes.monthly;
            const currentMonth = monthlyTimeframes.current;
            const previousMonth = monthlyTimeframes.previous;

            document.getElementById("play-hours").innerText = `${currentMonth}hrs`;
            document.getElementById("play-last-hour").innerText = `Last month ${previousMonth}hrs`
            break;
    }
}

function changeStudy(data,time) {
    const studyData = data.find(item => item.title === "Study");
    switch (time) {
        case "weekly":
            const weeklyTimeframes = studyData.timeframes.weekly;
            const currentWeek = weeklyTimeframes.current;
            const previousWeek = weeklyTimeframes.previous;

            document.getElementById("study-hours").innerText = `${currentWeek}hrs`;
            document.getElementById("study-last-hour").innerText = `Last week ${previousWeek}hrs`
            break;
        case "daily":
            const dailyTimeframes = studyData.timeframes.daily;
            const currentDay = dailyTimeframes.current;
            const previousDay = dailyTimeframes.previous;

            document.getElementById("study-hours").innerText = `${currentDay}hrs`;
            document.getElementById("study-last-hour").innerText = `Last day ${previousDay}hrs`
            break;
        case "monthly":
            const monthlyTimeframes = studyData.timeframes.monthly;
            const currentMonth = monthlyTimeframes.current;
            const previousMonth = monthlyTimeframes.previous;

            document.getElementById("study-hours").innerText = `${currentMonth}hrs`;
            document.getElementById("study-last-hour").innerText = `Last month ${previousMonth}hrs`
            break;
    }
}

function changeExercise(data,time) {
    const exerciseData = data.find(item => item.title === "Study");
    switch (time) {
        case "weekly":
            const weeklyTimeframes = exerciseData.timeframes.weekly;
            const currentWeek = weeklyTimeframes.current;
            const previousWeek = weeklyTimeframes.previous;

            document.getElementById("exercise-hours").innerText = `${currentWeek}hrs`;
            document.getElementById("exercise-last-hour").innerText = `Last week ${previousWeek}hrs`
            break;
        case "daily":
            const dailyTimeframes = exerciseData.timeframes.daily;
            const currentDay = dailyTimeframes.current;
            const previousDay = dailyTimeframes.previous;

            document.getElementById("exercise-hours").innerText = `${currentDay}hrs`;
            document.getElementById("exercise-last-hour").innerText = `Last day ${previousDay}hrs`
            break;
        case "monthly":
            const monthlyTimeframes = exerciseData.timeframes.monthly;
            const currentMonth = monthlyTimeframes.current;
            const previousMonth = monthlyTimeframes.previous;

            document.getElementById("exercise-hours").innerText = `${currentMonth}hrs`;
            document.getElementById("exercise-last-hour").innerText = `Last month ${previousMonth}hrs`
            break;
    }
}

function changeSocial(data,time) {
    const socialData = data.find(item => item.title === "Study");
    switch (time) {
        case "weekly":
            const weeklyTimeframes = socialData.timeframes.weekly;
            const currentWeek = weeklyTimeframes.current;
            const previousWeek = weeklyTimeframes.previous;

            document.getElementById("social-hours").innerText = `${currentWeek}hrs`;
            document.getElementById("social-last-hour").innerText = `Last week ${previousWeek}hrs`
            break;
        case "daily":
            const dailyTimeframes = socialData.timeframes.daily;
            const currentDay = dailyTimeframes.current;
            const previousDay = dailyTimeframes.previous;

            document.getElementById("social-hours").innerText = `${currentDay}hrs`;
            document.getElementById("social-last-hour").innerText = `Last day ${previousDay}hrs`
            break;
        case "monthly":
            const monthlyTimeframes = socialData.timeframes.monthly;
            const currentMonth = monthlyTimeframes.current;
            const previousMonth = monthlyTimeframes.previous;

            document.getElementById("social-hours").innerText = `${currentMonth}hrs`;
            document.getElementById("social-last-hour").innerText = `Last month ${previousMonth}hrs`
            break;
    }
}