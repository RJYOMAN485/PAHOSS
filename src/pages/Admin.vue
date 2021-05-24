<template>
  <div class="q-pa-md q-mr-md row items-start q-gutter-md">
    <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-secondary text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>10</strong>
            </q-item-label>
            <q-item-label class="text-center">
              Total Booking
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-info text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>4</strong>
            </q-item-label>
            <q-item-label class="text-center">
              Today's Booking
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-pink-7 text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>4</strong>
            </q-item-label>
            <q-item-label class="text-center">
              Active Booking
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

    <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-orange-4 text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>4</strong>
            </q-item-label>
            <q-item-label class="text-center">
              Release Booking
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

     <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-green-4 text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>4</strong>
            </q-item-label>
            <q-item-label class="text-center">
             Total Clients
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

     <div class="col-md-4 col-sm-5 col-xs-12 col-lg-3">
      <q-card style="max-width:400px" class="my-card bg-green text-white">
        <q-item>
          <q-item-section>
            <q-avatar round>
              <q-icon size="xl" color="white" name="article" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-center"
              ><strong>4</strong>
            </q-item-label>
            <q-item-label class="text-center">
              Total Slots
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>
      </q-card>
    </div>

     <div class="col-md-4 col-sm-10 col-xs-12 col-lg-8">
        <!-- <q-toolbar>
          <q-toolbar-title>Recent entries</q-toolbar-title>
          <q-btn
            to="/applicants"
            flat
            text-color="light-blue-8"
            label="Show All"
          ></q-btn>
        </q-toolbar> -->
        <div style="display:flex">
          <div class="text-h6 text-weight-thin">Recent bookings</div>
          <q-space />
        
        </div>
        <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="8">
            <div class="row no-wrap items-center">
              <div class="text-h5 q-ml-md text-white">Today's Booking</div>
            </div>
          </th>
        </tr>
        <tr style="color: #444">
          <th class="text-left">Name</th>
          <th class="text-right">Contact</th>
          <th class="text-right">Email</th>
          <th class="text-right">Address</th>
          <th class="text-right">Car type</th>
           <th class="text-right">Entry Time</th>
            <th class="text-right">Exit Time</th>
          
        </tr>
      </thead>
      <tbody style="color: #555555" class="bg-grey-3">
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
         
            
              
              
          
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>

        
            
             
          </td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>

         
           
          </td>
        </tr>
      </tbody>
    </q-markup-table>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
