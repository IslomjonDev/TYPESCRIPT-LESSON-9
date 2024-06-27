import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products/search', 
        params 
      }),
      providesTags:["Product"]
    }),
    getProductById: build.query({
      query: (id) => ({ 
        url: `/products/${id}`
      }),
      providesTags:["Product"]
    }),
    getUsers: build.query({
      query: (params) => ({ 
        url: `/users/search`,
        params
      }),
      providesTags:["Product"]
    }),
    SignIn: build.mutation({
      query: (body)=> ({
        url:"/auth/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    deleteUsers: build.mutation({
      query: (id)=> ({
        url:`/users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["User"]
    }),
    updateProduct: build.mutation({
      query: ({id, body})=> ({
        url:`/products/${id}`,
        method: "PUT", // or "PATCH"
        body
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetUsersQuery,
  useSignInMutation,
  useDeleteUsersMutation,
  useUpdateProductMutation
} = productApi