import React, { type FC, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { editProfileData } from '../../redux/actions/profileDataActions';
import { RootState } from '../../redux/types';
import CardLayout from '../../ui/CardLayout/CardLayout';
import { useDispatch } from '../../redux/utils';
import { initialFormValues } from './constants';
import { ProfileFormData } from './types';

import styles from './SettingsPage.module.scss';

const SettingsPage: FC = () => {
  const { data } = useSelector((state: RootState) => state.profileData);
  const { id } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState<File>();

  const initialValues = useMemo(() => ({ ...initialFormValues, ...data }), [data]);

  const onCancel = () => {
    navigate('/profile');
  };

  const rebuildData = (values: ProfileFormData) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, (values as any)[key]);
    });
    return Object.fromEntries(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const newData = rebuildData(values);
        dispatch(editProfileData({ data: { ...(newData as ProfileFormData) }, id }));
        setSubmitting(false);
        navigate('/profile');
      }}
    >
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        values: {
          name,
          email,
          whatsapp,
          spotify,
          telegram,
          link,
          linkedin,
          facebook,
          instagram,
          youtube,
          tiktok,
          behance,
          github,
        },
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.wrap}>
            <div className={styles.sectionWrap}>
              <h3 className={styles.title}>Basic information...</h3>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="name"
                  onChange={handleChange}
                  placeholder="Name"
                  value={name}
                />
                <label className={styles.infoTitle} htmlFor="name">
                  Name
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="email"
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  value={email}
                />
                <label className={styles.infoTitle} htmlFor="email">
                  Email
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="link"
                  onChange={handleChange}
                  placeholder="Website"
                  value={link}
                />
                <label className={styles.infoTitle} htmlFor="website">
                  Website
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="whatsapp"
                  onChange={handleChange}
                  placeholder="WhatsApp"
                  value={whatsapp}
                />
                <label className={styles.infoTitle} htmlFor="whatsapp">
                  WhatsApp
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="telegram"
                  onChange={handleChange}
                  placeholder="Telegram"
                  value={telegram}
                />
                <label className={styles.infoTitle} htmlFor="telegram">
                  Telegram
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="linkedin"
                  onChange={handleChange}
                  placeholder="LinkedIn"
                  value={linkedin}
                />
                <label className={styles.infoTitle} htmlFor="linkedin">
                  LinkedIn
                </label>
              </CardLayout>
              <CardLayout>
                {file && (
                  <img
                    alt="preview"
                    className={styles.img}
                    src={URL.createObjectURL(file)}
                  />
                )}
                <Field name="avatar">
                  {(form: { setFieldValue: any }) => (
                    <>
                      <label className={styles.fileInput} htmlFor="avatar">
                        Upload Photo
                      </label>
                      <input
                        id="avatar"
                        name="avatar"
                        onChange={(event) => {
                          if (event.currentTarget.files) {
                            setFieldValue('avatar', event.currentTarget.files[0]);
                            setFile(event.currentTarget.files[0]);
                          }
                        }}
                        placeholder="Photo"
                        type="file"
                      />
                    </>
                  )}
                </Field>
              </CardLayout>
            </div>
            <div className={styles.sectionWrap}>
              <h3 className={styles.title}>Social media links...</h3>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="github"
                  onChange={handleChange}
                  placeholder="Github"
                  value={github}
                />
                <label className={styles.infoTitle} htmlFor="github">
                  Github
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="behance"
                  onChange={handleChange}
                  placeholder="Behance"
                  value={behance}
                />
                <label className={styles.infoTitle} htmlFor="behance">
                  Behance
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="facebook"
                  onChange={handleChange}
                  placeholder="Facebook"
                  value={facebook}
                />
                <label className={styles.infoTitle} htmlFor="facebook">
                  Facebook
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="instagram"
                  onChange={handleChange}
                  placeholder="Instagram"
                  value={instagram}
                />
                <label className={styles.infoTitle} htmlFor="instagram">
                  Instagram
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="tiktok"
                  onChange={handleChange}
                  placeholder="Tiktok"
                  value={tiktok}
                />
                <label className={styles.infoTitle} htmlFor="tiktok">
                  Tiktok
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="spotify"
                  onChange={handleChange}
                  placeholder="Spotify"
                  value={spotify}
                />
                <label className={styles.infoTitle} htmlFor="spotify">
                  Spotify
                </label>
              </CardLayout>
              <CardLayout>
                <Field
                  className={styles.input}
                  id="youtube"
                  onChange={handleChange}
                  placeholder="Youtube"
                  value={youtube}
                />
                <label className={styles.infoTitle} htmlFor="youtube">
                  Youtube
                </label>
              </CardLayout>
            </div>
          </div>
          <div className={styles.buttonBlock}>
            <button className={styles.applyBtn} disabled={isSubmitting} type="submit">
              Apply
            </button>
            <button className={styles.cancelBtn} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default memo(SettingsPage);
