export const printDataInScreen = (data,user) => { 
  user.setId(5)
  user.setEmail(data.email) 
  user.setPassword(data.password)
  user.setFirst_name(data.first_name)
  user.setLast_name(data.last_name)
  user.setBirthday(data.birthday)
  user.setImage_url(data.image_url)
 }