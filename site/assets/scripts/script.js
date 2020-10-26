let vins = [
  {
    category: "Rouges",
    product: "Chevigny Vaucluse",
    TVAC: "4,40 €",
    HTVA: "3,64 €",
  },
  {
    category: "Rouges",
    product: "Terra Quantum C.Rhône 2018 BIO",
    TVAC: "9,30 €",
    HTVA: "7,69 €",
  },
  {
    category: "Rouges",
    product: "Terre Sauve 2014",
    TVAC: "5,18 €",
    HTVA: "4,28 €",
  },
  {
    category: "Rouges",
    product: "Syrah rouge",
    TVAC: "5,47 €",
    HTVA: "4,52 €",
  },
  {
    category: "Rouges",
    product: "Merlot 2018",
    TVAC: "5,37 €",
    HTVA: "4,44 €",
  },
  {
    category: "Rouges",
    product: "Blionne Bordeaux 2014",
    TVAC: "5,87 €",
    HTVA: "4,85 €",
  },
  {
    category: "Rouges",
    product: "Côtes de Buzet 2015",
    TVAC: "6,35 €",
    HTVA: "5,25 €",
  },
  {
    category: "Rouges",
    product: "Moulin de Mallet 2014",
    TVAC: "6,85 €",
    HTVA: "5,66 €",
  },
  {
    category: "Rouges",
    product: "Pinot noir Pays d'Oc 2016",
    TVAC: "7,26 €",
    HTVA: "6,00 €",
  },
  {
    category: "Rouges",
    product: "Bois Vert cuv. élégance 2012",
    TVAC: "7,74 €",
    HTVA: "6,40 €",
  },
  {
    category: "Rouges",
    product: "Bois Vert cuv. Élégance 2014",
    TVAC: "8,11 €",
    HTVA: "6,70 €",
  },
  {
    category: "Rouges",
    product: "Ch.la Sablière Beauséjour 2014 Côtes B-Castillon",
    TVAC: "7,41 €",
    HTVA: "6,12 €",
  },
  {
    category: "Rouges",
    product: "Cuvée Grafé Bordeaux 2015",
    TVAC: "8,13 €",
    HTVA: "6,72 €",
  },
  {
    category: "Rouges",
    product: "Ch. Paret 2012",
    TVAC: "8,68 €",
    HTVA: "7,17 €",
  },
  {
    category: "Rouges",
    product: "Côtes Rhône Village 10 ans 2016",
    TVAC: "9,29 €",
    HTVA: "7,68 €",
  },
  {
    category: "Rouges",
    product: "Madiran Vieilles vignes 2006",
    TVAC: "9,92 €",
    HTVA: "8,20 €",
  },
  {
    category: "Rouges",
    product: "Cairanne 2017 BIO",
    TVAC: "9,92 €",
    HTVA: "8,20 €",
  },
  {
    category: "Magnum",
    product: "Merlot 2015",
    TVAC: "11,31 €",
    HTVA: "9,35 €",
  },
  {
    category: "Magnum",
    product: "Bordeaux Grafé 20145",
    TVAC: "17,17 €",
    HTVA: "14,19 €",
  },
  {
    category: "Blancs",
    product: "Chevigny Vaucluse",
    TVAC: "4,40 €",
    HTVA: "3,64 €",
  },
  {
    category: "Blancs",
    product: "Les Guignards 2017 AOC Côtes de Duras",
    TVAC: "5,53 €",
    HTVA: "4,57 €",
  },
  {
    category: "Blancs",
    product: "Sauvignon d'Aquitaine 2019",
    TVAC: "5,76 €",
    HTVA: "4,76 €",
  },
  {
    category: "Blancs",
    product: "Viognier 2016",
    TVAC: "5,69 €",
    HTVA: "4,70 €",
  },
  {
    category: "Blancs",
    product: "Chardonnay 2018",
    TVAC: "5,74 €",
    HTVA: "4,74 €",
  },
  {
    category: "Blancs",
    product: "Chardonnay exception 2018",
    TVAC: "6,47 €",
    HTVA: "5,44 €",
  },
  {
    category: "Blancs",
    product: "Côtes Rhône (CPC) 2016",
    TVAC: "7,02 €",
    HTVA: "5,80 €",
  },
  {
    category: "Blancs",
    product: "Terra Quantum Languedoc 2018 BIO",
    TVAC: "9,30 €",
    HTVA: "7,69 €",
  },
  {
    category: "Blancs",
    product: "Saint-Véran 2017",
    TVAC: "14,18 €",
    HTVA: "11,72 €",
  },
  {
    category: "Rosés",
    product: "Chevigny Vaucluse",
    TVAC: "4,40 €",
    HTVA: "3,64 €",
  },
  {
    category: "Rosés",
    product: "Syrah 2019 Pays d'Oc",
    TVAC: "5,31 €",
    HTVA: "4,39 €",
  },
  {
    category: "Rosés",
    product: "Terra Quantum Languedoc 2018 BIO",
    TVAC: "9,30 €",
    HTVA: "7,69 €",
  },
  {
    category: "Rosés",
    product: "Cantelou 2016 Provence",
    TVAC: "8,32 €",
    HTVA: "6,88 €",
  },
  {
    category: "Rosés",
    product: "Tavel 2016 Rhône",
    TVAC: "10,29 €",
    HTVA: "8,50 €",
  },
  {
    category: "Mousseux",
    product: "Champagne E.Brut Vesselle",
    TVAC: "25,07 €",
    HTVA: "20,72 €",
  },
  {
    category: "Mousseux",
    product: "Crémant de Loire brut GL",
    TVAC: "10,95 €",
    HTVA: "9,05 €",
  },
];

document.onload(generateDynamicTable());

function generateDynamicTable() {
  if (vins.length > 0) {
    // Table style
    let table = document.createElement("table");

    // Retrieve column header
    let columns = [];
    for (i = 0; i < vins.length; i++) {
      for (key in vins[i]) {
        if (columns.indexOf(key) === -1) {
          columns.push(key);
        }
      }
    }

    // TABLE HEAD
    // Create table head
    let tableHead = document.createElement("thead");
    // Create row for table head
    let tableHeadRow = document.createElement("tr");
    // Create cells for table head
    for (i = 0; i < columns.length; i++) {
      let tableHeadCell = document.createElement("th");
      tableHeadCell.innerHTML = columns[i];
      tableHeadRow.appendChild(tableHeadCell);
    }

    // TABLE BODY
    // Create table body
    let tableBody = document.createElement("tbody");
    // Create rows for each object in the array
    for (i = 0; i < vins.length; i++) {
      let tableRow = document.createElement("tr");
      // Create cells for each row
      for (j = 0; j < columns.length; j++) {
        let tableCell = document.createElement("td");
        tableCell.innerHTML = vins[i][columns[j]];
        tableRow.appendChild(tableCell);
      }
      tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody);

    // Add table to a container
    document.getElementById("dynamicTable").innerHTML = "";
    document.getElementById("dynamicTable").appendChild(table);
  }
}
