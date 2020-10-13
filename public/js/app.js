window.addEventListener("load", () => {
  const el = $("#app");

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($("#error-template").html());
  const chartTemplate = Handlebars.compile($("#chart-template").html());

  // Instantiate api handler
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000
  });

  const router = new Router({
    mode: "history",
    page404: path => {
      const html = errorTemplate({
        color: "yellow",
        title: "Error 404 - Page NOT Found!",
        message: `The path '/${path}' does not exist on this site`
      });
      el.html(html);
    }
  });

  // Display Error Banner
  const showError = error => {
    const { title, message } = error.response.data;
    const html = errorTemplate({ color: "red", title, message });
    el.html(html);
  };

  // Render Index
  router.add("/", async () => {
    // Display loader first
    const message = "Please select a stat to display";
    let html = chartTemplate({ message });
    el.html(html);
    try {
      $(".loading").removeClass("loading");
    } catch (error) {
      showError(error);
    }
  });

  // Render chart template
  const renderTemplate = async statName => {
    const response = await api.get("/stats");
    const data = response.data;
    html = chartTemplate();
    el.html(html);
    $(".loading").removeClass("loading");
    renderChart(statName, data);
  };

  // render chart
  const renderChart = (statName, data) => {
    const stat = data.map(x => ({
      name: x.name,
      data: [x[statName]]
    }));

    Highcharts.chart("chart-container", {
      chart: {
        type: "bar"
      },
      title: {
        text: statName
      },
      xAxis: {
        categories: [statName]
      },
      series: stat
    });
  };

  router.navigateTo(window.location.pathname);

  $("a").on("click", event => {
    // Block page load
    event.preventDefault();

    // Highlight active menu on click
    const target = $(event.target);
    $(".item").removeClass("active");
    target.addClass("active");

    // Render selected stat
    const statName = target.attr("data-stat");

    renderTemplate(statName);
  });
});
