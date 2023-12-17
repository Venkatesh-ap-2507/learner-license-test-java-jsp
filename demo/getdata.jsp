 <%@ page  import="java.io.*,java.util.*,java.sql.*,org.json.simple.*"%>
 <%@ page import = "javax.servlet.*,java.text.*" %>
<%


                      Class.forName("com.mysql.jdbc.Driver");
                      Connection  conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ltest","root","");

                      int basic=0 , standard =0 , premium = 0;
                     

                     
                     try {
                         
                        PreparedStatement  basicPlanQuery = conn.prepareStatement("SELECT COUNT(*) FROM `user` WHERE userType ='basic'");
                         ResultSet  basicPlan =   basicPlanQuery.executeQuery();
                          while(basicPlan.next()){
                         basic = basicPlan.getInt(1);
                          }

                           PreparedStatement standerdPlanQuery = conn.prepareStatement("SELECT COUNT(*) FROM `user` WHERE userType='standard'");
                         ResultSet standerdPlan =   standerdPlanQuery.executeQuery();
                          while(standerdPlan.next()){
                         standard =standerdPlan.getInt(1);
                          }

                         PreparedStatement premiumPlanQuery = conn.prepareStatement("SELECT  COUNT(*) FROM `user` WHERE  userType ='premium'");
                         ResultSet premiumPlan =   premiumPlanQuery.executeQuery();
                          while(premiumPlan.next()){
                        premium =premiumPlan.getInt(1);
                          }


                     } catch (Exception e) {

                         out.print(e);
                         
                     }


%>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>

    <!-- jquery cdn link -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>

<body>

    <div style="width: 40%; margin-left: auto; margin-right: auto;">

        <canvas id="chart" width="50" height="50"></canvas>

    </div>

    <script>


        
        const data = {
            labels: [
                'Basic',
                'Standar',
                'Premium'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [<%out.print(basic); %>, <%out.print(standard); %>, <%out.print(premium); %>],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };

        const ctx = document.getElementById('chart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


    </script>
</body>

</html>