// pages/manipulators.js
export function loadManipulatorPage() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="guide-container">
      <h2>Manipulator Reference</h2>

      <div class="tab-controls">
        <button class="tab-btn active" data-tab="titan4">🦾 Titan 4</button>
        <button class="tab-btn" data-tab="atlas">🤖 Atlas 7R</button>
        <button class="tab-btn" data-tab="rigmaster">🛠️ RigMaster</button>
      </div>

      <!-- TITAN 4 -->
      <div class="tab-content" id="titan4" style="display: block;">
        <div class="guide-card">
          <h3>🔧 Titan 4 Manipulator</h3>
          <p><strong>Type:</strong> Position-Controlled, 7-Function, Heavy-Duty</p>
          <p><strong>Models:</strong> 4 km & 7 km variants</p>
          <p><strong>Doc Ref:</strong> Titan 4 Manual (011-8212)</p>

          <ul>
            <li><strong>Depth Rating:</strong> 4,000 msw (std), 7,000 msw (Model 199-0303)</li>
            <li><strong>Reach:</strong> 1,922 mm (75.7")</li>
            <li><strong>Lift Capacity:</strong> 122 kg @ full ext., 454 kg max</li>
            <li><strong>Gripper Open:</strong> 99 mm (3.9") | <strong>Grip Force:</strong> 4,092 N (920 lbf)</li>
            <li><strong>Wrist Torque:</strong> 170 Nm | <strong>Rotate:</strong> 360°, 6–35 rpm</li>
            <li><strong>Weight:</strong> 100 kg air / 78 kg water</li>
          </ul>

          <h4>Hydraulics</h4>
          <ul>
            <li>1500–3000 psi (207 bar max), 5.7–19 lpm</li>
            <li>Max fluid temp: 54 °C | Return Pressure: 500 psi</li>
            <li>Fittings: Supply -4 JIC (¼”), Return -6 JIC (⅜”)</li>
          </ul>

          <h4>Functions</h4>
          <p>Azimuth, Shoulder, Elbow, Wrist Pitch/Yaw/Rotate, Jaw</p>

          <h4>Service Notes</h4>
          <ul>
            <li>Position control via master/slave joystick</li>
            <li>Compensated: 2.2 L + 9.6 L volume</li>
            <li>SeaNet cabling with internal electronics</li>
          </ul>
        </div>
      </div>

      <!-- ATLAS -->
      <div class="tab-content" id="atlas" style="display: none;">
        <div class="guide-card">
          <h3>🔧 Atlas 7R Manipulator</h3>
          <p><strong>Type:</strong> Rate-Controlled, 7-Function Grabber</p>
          <p><strong>Model:</strong> 199-0292 Series | Doc Ref: 011-8228</p>

          <ul>
            <li><strong>Depth:</strong> 6,500 msw | <strong>Reach:</strong> 1,664 mm</li>
            <li><strong>Lift:</strong> 250 kg @ ext., 500 kg max</li>
            <li><strong>Grip:</strong> 198 mm (7.8") | 4,448 N (1,000 lbf)</li>
            <li><strong>Wrist:</strong> 205 Nm | 360° @ 6–35 rpm</li>
            <li><strong>Weight:</strong> 73 kg air / 50 kg seawater</li>
          </ul>

          <h4>Hydraulics</h4>
          <ul>
            <li>1500–3000 psi | 5.7–19 lpm | Max fluid temp: 54 °C</li>
            <li>Fittings: -4 JIC Female (¼”)</li>
          </ul>

          <h4>Functions</h4>
          <p>Azimuth, Shoulder, Elbow, Wrist Pitch/Yaw/Rotate, Jaw</p>

          <h4>Service Notes</h4>
          <ul>
            <li>Linear actuators, gerotor motor on wrist</li>
            <li>Speed/torque via restrictors & relief valves</li>
            <li>L/R conversion: re-route hoses + yaw plate flip</li>
          </ul>
        </div>
      </div>

      <!-- RIGMASTER -->
      <div class="tab-content" id="rigmaster" style="display: none;">
        <div class="guide-card">
          <h3>🔧 RigMaster Manipulator</h3>
          <p><strong>Type:</strong> Rate-Controlled, 5-Function Utility Arm</p>
          <p><strong>Models:</strong> 199-0274, 199-0287 | Doc Ref: 011–8204</p>

          <ul>
            <li><strong>Depth:</strong> 6,500 msw | <strong>Reach:</strong> 996–1300 mm</li>
            <li><strong>Lift:</strong> 270 kg retracted, 181 kg extended</li>
            <li><strong>Grip:</strong> 284 mm (11.2") | 4,448 N</li>
            <li><strong>Wrist:</strong> 170 Nm | 360° @ 8–35 rpm</li>
            <li><strong>Weight:</strong> 64 kg air / 48 kg water</li>
          </ul>

          <h4>Hydraulics</h4>
          <ul>
            <li>1500–3000 psi | 5.7–19 lpm | Max fluid temp: 54 °C</li>
            <li>Fittings: -4 JIC Male (¼”) | 0.25” hose</li>
          </ul>

          <h4>Functions</h4>
          <p>Base Yaw, Shoulder Pitch, Boom Extend, Wrist Rotate, Jaw</p>

          <h4>Service Notes</h4>
          <ul>
            <li>Basic arm for utility tasks / backup use</li>
            <li>External relief valves required</li>
            <li>Do not lock jaw with check valve — failsafe issue</li>
          </ul>
        </div>
      </div>
    </section>
  `;

  const tabs = app.querySelectorAll('.tab-btn');
  const contents = app.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => (c.style.display = 'none'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.getElementById(target).style.display = 'block';
    });
  });
}
