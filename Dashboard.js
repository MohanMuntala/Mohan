const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Charging Station Owner Dashboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-image: url('BG4.jpg'); /* Background image URL */
      background-size: cover;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.8); /* Background color with opacity */
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .options {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    .dashboard-section {
      margin-bottom: 20px;
    }

    .slots-container,
    .bookings-container {
      background-color: #f2f2f2;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }

    .slots-container h2,
    .bookings-container h2 {
      text-align: center;
      margin-bottom: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      border-radius: 8px;
    }

    th, td {
      padding: 10px;
      border: 1px solid #ddd;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    .logout-btn {
      padding: 10px 20px;
      background-color: #dc3545;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
    }

    .logout-btn:hover {
      background-color: #c82333;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Charging Station Owner Dashboard</h1>
  <div class="options">
    <button onclick="window.location.href='slots.html'">View Slots</button>
    <button onclick="window.location.href='bookings.html'">View Bookings</button> <!-- Added "View Bookings" button -->
  </div>

  <div class="dashboard-section">
    <div class="slots-container">
      <h2>Slots</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add slot data here -->
          <tr>
            <td>1</td>
            <td>Slot 1</td>
            <td>Available</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Slot 2</td>
            <td>Unavailable</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bookings-container">
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>User</th>
            <th>Slot ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add booking data here -->
          <tr>
            <td>12:00 PM</td>
            <td>Harshal</td>
            <td>Slot A</td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <td>01:30 PM</td>
            <td>Vinodh</td>
            <td>Slot B</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>03:00 PM</td>
            <td>Mohan</td>
            <td>Slot C</td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </table>
      <div class="options" style="justify-content: center; margin-top: 20px;">
        <button onclick="window.location.href='feedback.html'">Feedback</button> <!-- Added feedback button below the Bookings table -->
      </div>
    </div>
  </div>

  <button class="logout-btn" onclick="window.location.href='logout.html'">Logout</button>
</div>

</body>
</html>
`;

console.log(htmlCode);
