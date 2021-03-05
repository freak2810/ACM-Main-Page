# [ACM Main Website](https://mvsr.acm.org/)

This is a website created for ACM MVSR Student Chapter.

The CMS for this application could be found at [ACM Boo Boo](https://acm-boo-boo.sanity.studio/) (Restricted Access)

## Starting the Project Locally

Make sure that you have [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed in your system before you start the application.

### Installing Packages

Open the Application and run the following command.

```
yarn run clean-install
```

### Adding Environment Variables

Create a new file with name ```.env``` in the project directory and add the variables.

```
REACT_APP_EMAILJS_TEMPLATE_ID = template_[TEMPLATE-ID]
REACT_APP_EMAILJS_USER_ID = user_[USER-ID]
```

### Starting the Server Locally

Once the environment variables are installed, open the terminal and enter the following command.    

```
yarn start
```

## Deployment

1. To deploy it to the CPanel, First run the following command in the terminal

    ```
    yarn run build
    ```
2. Open the folder directory and compress the contents of the ```build``` folder.   
3. Open [CPanel](https://mvsr.hosting2.acm.org:2083/cpsess0732199936/frontend/paper_lantern/index.html) and enter the credentials.
4. Open **File Manager** and Navigate to ```public_html```
5. Click on the **upload** button on the top, Select the compressed file and Click **Upload**.
6. When the file is uploaded, navigate back to the file manager.
7. Right Click on the zip file and click **Extract**.
8. When the contents are extracted, we are done.

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
* [ReactJS](https://reactjs.org/) - Framework
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling
* [Sanity.io](https://www.sanity.io/docs) - Headless CMS

## Packages Used

* [React Router](https://reactrouter.com/) - Routing
* [React Images](https://www.npmjs.com/package/react-images) - Responsive Gallery Component
* [React Helmet](https://www.npmjs.com/package/react-helmet) - SEO
* [Font Awesome](https://fontawesome.com/) - Icons
* [EmailJS](https://www.emailjs.com/) - Email Service

## Authors

* [**Aditya Manikanth Rao**](https://github.com/AdityaManikanth2180)
* [**Keerthana Dhara**](https://github.com/Keerthana-dhara)
* [**NSS Koushik**](https://github.com/nssk1999)
* [**Sai Sri Chandra**](https://github.com/SaiSrichandra)
* [**Sai Yashwant**](https://github.com/saiyashwant07)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code and icons were used.

