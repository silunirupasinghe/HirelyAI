
export const getJobApllicationsForJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobApplication?jobId=${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };
  
  export const getJobApplicationById = async (id) => {
  
    const res = await fetch(`http://localhost:8000/jobApplication/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };
  
  export const createJobApplication = async ({
    userId,
    fullName,
    job,
    answers,
  }) => {
    await fetch("http://localhost:8000/jobApplication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        fullName: fullName,
        job,
        answers,
      }),
    });
  };
  