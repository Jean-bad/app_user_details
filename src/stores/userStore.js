import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
    id: 'user',
    state: () => ({
        users: [],
        page: 1,
        isLoading: true
    }),
    actions: {
        async fetchApi(){
            try{
                const response = await fetch(`https://reqres.in/api/users?page=${this.page}`);
                await new Promise(resolve => setTimeout(resolve, 300))
                const data = await response.json();
                this.users = data.data;
                this.isLoading = false;
            }catch(e){
                console.error('Error al obtener los datos de la Api', e);
            }
            },
            nextPage(){
                this.page < 2 ? this.page++ : 1;
                this.fetchApi();
            },
            previousPage(){
                this.page > 1 ? this.page-- : 1;
                this.fetchApi();
            },
            async findUserById(userId){
                const user = this.users.find(u => u.id == userId);
                if(user){
                    return user;
                };
                try{
                    const response = await fetch(`https://reqres.in/api/users/${userId}`);
                    if(response.status != 200) return null
                    const data = await response.json();
                    return data.data
                }catch(e){
                    console.error('Error al obtener los datos de la Api', e);
                }
            }
    }
})