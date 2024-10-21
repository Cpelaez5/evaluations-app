import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from '../models/UserRole';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
    
        if (!token) return res.status(403).json({ message: "No token provided!" });
    
        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id; // Guarda el ID del usuario

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found!" });

        req.user = user; // Asigna el usuario encontrado a req.user

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};

export const isManager = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "manager") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require Manager Role!" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const isAdmin = async (req, res, next) => {
   try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require admin Role!" });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const isEmployee = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "employee") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require employee Role!" });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const isManagerOrAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "manager" || roles[i].name === "admin") {
                next();
                return;
            }
        }
        return res.status(403).json({ message: "Require Manager or Admin Role!" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const isCreatorOrAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const evaluation = await Evaluation.findById(req.params.evaluationId);
        if (!evaluation) return res.status(404).json({ message: "Evaluation not found" });

        const roles = await Role.find({ _id: { $in: user.roles } });

        const isAdmin = roles.some(role => role.name === "admin");
        const isCreator = evaluation.createdBy.toString() === user._id.toString();

        if (isAdmin || isCreator) {
            next();
        } else {
            return res.status(403).json({ message: "Require Creator or Admin Role!" });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

