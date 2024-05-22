module.exports = (Sequelize, DataTypes)=> {
    let service_requests = Sequelize.define("service_request", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        service_code: {
            type: DataTypes.STRING(45),
            allowNull: false,
            references: {
                "model": "facility_services",
                "key": "code"
            }
        },
        facility_code: {
            type: DataTypes.STRING(45),
            allowNull: false,
            references: {
                "model": "facilities",
                "key": "code"
            }
        },
        association_service_code: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
        user_type: {
            type: DataTypes.ENUM("customer","business"),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        postcode: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        suburb: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        enquiry_status: {
            type: DataTypes.ENUM("NEW", "ASSIGNED", "IN-PROGRESS", "COMPLETED"),
            defaultValue: "NEW",
            allowNull: false
        },
        complete_address: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        query: {
            type: DataTypes.STRING(400),
            allowNull: false
        },
        created_by: {
            type: DataTypes.UUID,
            allowNull: true
        },
        updated_by: {
            type: DataTypes.UUID,
            allowNull: true
        }
    }, {
        timestamps: true,
    });
    return service_requests;
};