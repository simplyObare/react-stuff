import styles from './RegisterForm.module.css'
import { useForm } from '@tanstack/react-form'

interface RegisterFormData {
  username: string
  email: string
  firstName: string
  lastName: string
  age: number
  birthdate: string
  isMarried: boolean
  nationality: string
  password: string
  confirmPassword: string
}

const RegisterForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      age: 0,
      birthdate: '',
      isMarried: false,
      nationality: '',
      password: '',
      confirmPassword: '',
    } as RegisterFormData,

    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2))
    },
  })

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Registration Form</h1>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === '' ? 'username is required' : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Username"
              />
              <em style={{ color: 'red' }}>
                {field.state.meta.errors.join(', ')}
              </em>
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              return !emailRegex.test(value)
                ? 'please enter a valid email'
                : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Email"
                required
              />
              <em style={{ color: 'red' }}>
                {field.state.meta.errors.join(', ')}
              </em>
            </div>
          )}
        </form.Field>

        <form.Field
          name="firstName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === ''
                ? 'your first name is required'
                : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="first name"
              />
              <em style={{ color: 'red' }}>
                {field.state.meta.errors.join(', ')}
              </em>
            </div>
          )}
        </form.Field>

        <form.Field
          name="lastName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === '' ? 'your name is required' : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="last name"
              />
              <em style={{ color: 'red' }}>
                {field.state.meta.errors.join(', ')}
              </em>
            </div>
          )}
        </form.Field>

        <form.Field
          name="age"
          validators={{
            onChange: ({ value }) => {
              return value < 18 ? 'you should be over 18' : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                placeholder="Age"
              />
              <em style={{ color: 'red' }}>
                {field.state.meta.errors.join(', ')}
              </em>
            </div>
          )}
        </form.Field>

        <form.Field
          name="birthdate"
          validators={{
            onChange: ({ value }) => {
              return value === '' ? 'date of birth is required' : undefined
            },
          }}
        >
          {(field) => (
            <div>
              <input
                type="date"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em style={{ color: 'red' }}>
                  {field.state.meta.errors.join(', ')}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="isMarried"
          validators={{
            onChange: () => undefined,
          }}
        >
          {(field) => (
            <div>
              <label>
                Married?
                <input
                  type="checkbox"
                  name="isMarried"
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                />
              </label>
            </div>
          )}
        </form.Field>

        <form.Field
          name="nationality"
          validators={{
            onChange: ({ value }) =>
              value === '' ? 'please select a nationality' : undefined,
          }}
        >
          {(field) => (
            <div>
              <select
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className={styles.select}
              >
                <option value="" disabled>
                  Select Nationality
                </option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kenyan">Kenyan</option>
                <option value="Mexican">Mexican</option>
                <option value="Nigerian">Nigerian</option>
                <option value="South African">South African</option>
                <option value="Spanish">Spanish</option>
                <option value="Other">Other</option>
              </select>

              {field.state.meta.errors.length > 0 && (
                <em style={{ color: 'red' }}>
                  {field.state.meta.errors.join(', ')}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              value.length < 8
                ? 'password must be at least 8 characters'
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Password"
                required
              />

              {field.state.meta.errors.length > 0 && (
                <em style={{ color: 'red' }}>
                  {field.state.meta.errors.join(', ')}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="confirmPassword"
          validators={{
            onChangeListenTo: ['password'],
            onChange: ({ value, fieldApi }) =>
              value !== fieldApi.form.getFieldValue('password')
                ? 'passwords do not match'
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="confirm password"
                required
              />

              {field.state.meta.errors.length > 0 && (
                <em style={{ color: 'red' }}>
                  {field.state.meta.errors.join(', ')}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
