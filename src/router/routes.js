const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Dashboard.vue"),
        meta: { requireGuest: true },
        
      },
      {
        path: "/closebuy",
        component: () => import("pages/CloseBuy.vue"),
        meta: { requireGuest: true },
        
      },
      {
        path: "/bookslot",
        component: () => import("pages/Booking.vue"),
        meta: { requireGuest: true },
        
      },
      {
        path: "/profile",
        component: () => import("pages/Profile.vue"),
        meta: { requireGuest: true },
        
      },

      {
        path: "/clients",
        component: () => import("pages/Clients.vue"),
        meta: { requireGuest: true },
        
      },
      {
        path: "/parking-zones",
        component: () => import("pages/Parking.vue"),
        meta: { requireGuest: true },
        
      },
      {
        path: "/admin",
        component: () => import("pages/Admin.vue"),
        meta: { requireGuest: true },
        
      },

      {
        path: "/parking/edit/:id",
        component: () => import("src/pages/EditParking.vue"),
        meta: { authRequired: true },

      
      },
      {
        path: "/parking/new",
        component: () => import("src/pages/AddParking.vue"),
        meta: { authRequired: true },

      
      },

      {
        path: "/booking/today",
        component: () => import("src/pages/TodayBookings.vue"),
        meta: { authRequired: true },

      
      },

      {
        path: "/booking/active",
        component: () => import("src/pages/ActiveBookings.vue"),
        meta: { authRequired: true },

      
      },

      {
        path: "/bookings/",
        component: () => import("src/pages/Bookings.vue"),
        meta: { authRequired: true },

      
      },

      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
    meta: { requireGuest: true },
    
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
    meta: { requireGuest: true },
    
  },
 
  
];

export default routes;
