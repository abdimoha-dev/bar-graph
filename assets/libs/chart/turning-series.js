$(function() {
    var datasets = {
        "usa": {
            label: "USA",
            data: [
                [201706, 78],
                [201707, 77],
                [201708, 83],
                [201709, 82],
                [201710, 84],
                [201711, 89],
                [201712, 90],
                [201801, 56],
                [201802, 78],
                [201803, 78],
                [201804, 87],
                [201805, 76],


            ]
        },
        "norway": {
            label: "Norway",
            data: [
                [201706, 78],
                [201707, 70],
                [201708, 80],
                [201709, 78],
                [201710, 90],
                [201711, 89],
                [201712, 86],
                [201801, 50],
                [201802, 70],
                [201803, 70],
                [201804, 85],
                [201805, 75],

            ]
        }
    };
   /* var dataSet = [
    {label: "USA", color: "#005CDE" },
    { label: "Norway", color: "#ED7B00" }    
];*/
    // hard-code color indices to prevent them from shifting as
    // countries are turned on/off
    var i = 0;
    $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
    });

    // insert checkboxes 
    var choiceContainer = $("#choices");
    $.each(datasets, function(key, val) {
        choiceContainer.append('<input type="checkbox" name="' + key +
            '" checked="checked" id="id' + key + '">' +
            '<label for="id' + key + '">' +
            val.label + '</label>');
    });
    choiceContainer.find("input").click(plotAccordingToChoices);


    function plotAccordingToChoices() {
        var data = [];

        choiceContainer.find("input:checked").each(function() {
            var key = $(this).attr("name");
            if (key && datasets[key])
                data.push(datasets[key]);
        });

        if (data.length > 0)
            $.plot($("#placeholder"), data, {
                yaxis: { min: 0 },
                xaxis: { tickDecimals: 0 }
            });
    }

    plotAccordingToChoices();
});
