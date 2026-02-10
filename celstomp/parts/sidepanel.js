document.getElementById('part-sidepanel').innerHTML = `
  <div id="islandSidePanel" class="islandSidePanel" aria-hidden="true">
    <div class="islandSideHeader">Side Panel</div>
    <div class="islandSideBody" id="islandSideBody">
      <div class="islandSideGrid">
        <button id="fillCurrent">Fill current cel</button>
        <button id="fillAll">Fill all cels</button>

        <label class="chip"><input id="autofillToggle" type="checkbox" unchecked /> Autofill on draw</label>

        <div class="layerControls">
          <button id="soloLayerBtn" class="miniBtn" title="Solo Layer">Solo</button>
          <button id="showAllLayersBtn" class="miniBtn" title="Show All">All</button>
        </div>

        <button id="fitView" title="Reset size &amp; recenter">Recenter Canvas</button>

        <div class="paletteControls">
          <button id="addPaletteColor" class="miniBtn">Add Color</button>
          <button id="newPaletteBtn" class="miniBtn">New</button>
          <button id="exportPaletteBtn" class="miniBtn">Export</button>
          <button id="importPaletteBtn" class="miniBtn">Import</button>
        </div>

      </div>

      <div id="paletteBar" class="paletteBar" aria-label="Saved colors"></div>
    </div>
  </div>
`;
