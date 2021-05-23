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
