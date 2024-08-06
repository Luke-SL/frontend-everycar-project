import { ref } from "vue";
import useSupabase from "src/boot/supabase";

const user = ref(null);
export default function useAuthUser() {
  const { supabase } = useSupabase();

  const signIn = async (form) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;
    return user;
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const register = async (form) => {
    const { user, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          name: form.name,
          surname: form.surname,
          // birthdate: form.birthdate,
          // phone: form.phone,
          // address: form.address,
          // city: form.city,
          // state: form.state,
          // country: form.country,
          // zipcode: form.zipcode,
          is_writer: false,
          is_subscriber: false,
          emailRedirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
        },
      },
    });
    if (error) throw error;
    return user;
  };

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return user;
  };
  const resetPassword = async (new_password) => {
    // console.log(new_password);
    const { user, error } = await supabase.auth.updateUser({
      password: new_password,
    });
    if (error) throw error;
    return user;
  };

  return {
    signIn,
    isLoggedIn,
    logout,
    register,
    sendPasswordRestEmail,
    resetPassword,
    user,
  };
}
